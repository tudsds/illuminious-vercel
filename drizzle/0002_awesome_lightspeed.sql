ALTER TABLE `admins` ADD `emailVerified` boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE `admins` ADD `resetToken` varchar(256);--> statement-breakpoint
ALTER TABLE `admins` ADD `resetTokenExpiry` timestamp;--> statement-breakpoint
ALTER TABLE `contact_submissions` ADD `adminNotes` text;--> statement-breakpoint
ALTER TABLE `contact_submissions` ADD `handledBy` int;--> statement-breakpoint
ALTER TABLE `posts` ADD `tags` json;--> statement-breakpoint
ALTER TABLE `posts` ADD `category` varchar(100);--> statement-breakpoint
ALTER TABLE `posts` ADD `readTime` int;