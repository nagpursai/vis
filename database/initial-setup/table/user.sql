CREATE TABLE `user` (
	`user_sys_id` BIGINT(20) NOT NULL,
	`first_name` VARCHAR(50) NULL DEFAULT NULL,
	`last_name` VARCHAR(50) NULL DEFAULT NULL,
	`email` VARCHAR(50) NOT NULL,
	`password` VARCHAR(50) NOT NULL,
	`phone` BIGINT(12) NULL DEFAULT NULL
)
COMMENT='to store the user information'
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
;
