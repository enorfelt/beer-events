import { hash } from '@node-rs/argon2';
import { encodeBase32LowerCase } from '@oslojs/encoding';
import { fail, redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import * as auth from '$lib/server/auth';
import { db } from '$lib/server/db';
import * as table from '$lib/server/db/schema';
import type { Actions } from '@sveltejs/kit';

export const load = async (event) => {
    if (event.locals.user) {
        return redirect(302, '/');
    }
    return {};
};

export const actions: Actions = {
    register: async (event) => {
        const formData = await event.request.formData();
        const username = formData.get('username');
        const email = formData.get('email');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirmPassword');

        // Validate username
        if (!validateUsername(username)) {
            return fail(400, {
                message: 'Invalid username (min 3, max 31 characters, alphanumeric only)'
            });
        }

        // Validate email
        if (!validateEmail(email)) {
            return fail(400, {
                message: 'Invalid email address'
            });
        }

        // Validate password
        if (!validatePassword(password)) {
            return fail(400, {
                message: 'Invalid password (min 6, max 255 characters)'
            });
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            return fail(400, {
                message: 'Passwords do not match'
            });
        }

        // Check if username already exists
        const usernameExists = await db
            .select({ id: table.user.id })
            .from(table.user)
            .where(eq(table.user.username, username))
            .then((rows) => rows.length > 0);

        if (usernameExists) {
            return fail(400, {
                message: 'Username is already taken'
            });
        }

        try {
            // Generate user ID
            const userId = generateUserId();
            
            // Hash password
            const passwordHash = await hash(password, {
                memoryCost: 19456,
                timeCost: 2,
                outputLen: 32,
                parallelism: 1
            });

            // Create user in database
            await db.insert(table.user).values({
                id: userId,
                username,
                passwordHash,
                email: email as string
            });

            // Create session
            const sessionToken = auth.generateSessionToken();
            const session = await auth.createSession(sessionToken, userId);
            auth.setSessionTokenCookie(event, sessionToken, session.expiresAt);

            // Redirect to home page after successful registration
            return redirect(302, '/');
        } catch (error) {
            console.error('Registration error:', error);
            return fail(500, {
                message: 'An error occurred during registration. Please try again.'
            });
        }
    }
};

// Helper functions
function generateUserId() {
    // ID with 120 bits of entropy, or about the same as UUID v4.
    const bytes = crypto.getRandomValues(new Uint8Array(15));
    const id = encodeBase32LowerCase(bytes);
    return id;
}

function validateUsername(username: unknown): username is string {
    return (
        typeof username === 'string' &&
        username.length >= 3 &&
        username.length <= 31 &&
        /^[a-z0-9_-]+$/.test(username)
    );
}

function validateEmail(email: unknown): email is string {
    return (
        typeof email === 'string' &&
        email.length > 0 &&
        email.length <= 255 &&
        /^[^@]+@[^@]+\.[^@]+$/.test(email)
    );
}

function validatePassword(password: unknown): password is string {
    return typeof password === 'string' && password.length >= 6 && password.length <= 255;
}
