import { pgTable, integer, text, timestamp, primaryKey, index } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
	id: text('id').primaryKey(),
	age: integer('age'),
	username: text('username').notNull().unique(),
	email: text('email').notNull().unique(),
	passwordHash: text('password_hash').notNull()
}, (table) => ({
	// Using the .on() approach from the documentation
	usernameIdx: index('username_idx').on(table.username),
	emailIdx: index('email_idx').on(table.email)
}));

export const session = pgTable('session', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id),
	expiresAt: timestamp('expires_at', { withTimezone: true, mode: 'date' }).notNull()
}, (table) => ({
	// Using the .using() approach from the documentation
	userIdIdx: index('user_id_idx').using('btree', table.userId),
	expiresAtIdx: index('expires_at_idx').using('btree', table.expiresAt)
}));

export type Session = typeof session.$inferSelect;

export type User = typeof user.$inferSelect;
