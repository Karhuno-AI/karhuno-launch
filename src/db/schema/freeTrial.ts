// import { integer, pgTable, varchar, timestamp } from "drizzle-orm/pg-core";

// export const usersTable = pgTable("freeTrial", {
//     id: integer().primaryKey().generatedAlwaysAsIdentity(),
//     ICPName: varchar({ length: 255 }).notNull(),
//     moreDetails: varchar({length: 255}),
//     companyName: varchar({ length: 255 }).notNull().unique(),
//     username: varchar({length:255}).notNull(),
//     email: varchar({length:255}).notNull(),
    
//     createdAt:timestamp("created_at").defaultNow().notNull(),
//     updatedAt: timestamp("updated_at").defaultNow().notNull()
// });