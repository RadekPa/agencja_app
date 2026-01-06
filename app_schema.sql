BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[User] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000),
    [email] NVARCHAR(1000) NOT NULL,
    [passwordHash] NVARCHAR(1000) NOT NULL,
    [role] NVARCHAR(32) NOT NULL CONSTRAINT [User_role_df] DEFAULT 'USER',
    [permissions] NVARCHAR(max),
    [locale] NVARCHAR(1000) NOT NULL CONSTRAINT [User_locale_df] DEFAULT 'pl',
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [User_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [User_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [User_email_key] UNIQUE NONCLUSTERED ([email])
);

-- CreateTable
CREATE TABLE [dbo].[RolePermissions] (
    [id] INT NOT NULL IDENTITY(1,1),
    [module] NVARCHAR(1000) NOT NULL,
    [userAccess] BIT NOT NULL CONSTRAINT [RolePermissions_userAccess_df] DEFAULT 0,
    [advancedAccess] BIT NOT NULL CONSTRAINT [RolePermissions_advancedAccess_df] DEFAULT 0,
    [adminAccess] BIT NOT NULL CONSTRAINT [RolePermissions_adminAccess_df] DEFAULT 1,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [RolePermissions_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [RolePermissions_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [RolePermissions_module_key] UNIQUE NONCLUSTERED ([module])
);

-- CreateTable
CREATE TABLE [dbo].[Client] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [email] NVARCHAR(1000),
    [phone] NVARCHAR(1000),
    [address] NVARCHAR(1000),
    [city] NVARCHAR(1000),
    [postalCode] NVARCHAR(1000),
    [country] NVARCHAR(1000) CONSTRAINT [Client_country_df] DEFAULT 'Polska',
    [nip] NVARCHAR(1000),
    [regon] NVARCHAR(1000),
    [legalForm] NVARCHAR(1000),
    [bankAccount] NVARCHAR(1000),
    [notes] NVARCHAR(1000),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Client_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Client_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Author] (
    [id] INT NOT NULL IDENTITY(1,1),
    [firstName] NVARCHAR(1000) NOT NULL,
    [middleName] NVARCHAR(1000),
    [lastName] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(1000),
    [workEmail] NVARCHAR(1000),
    [personalEmail] NVARCHAR(1000),
    [photos] NVARCHAR(max),
    [clientId] INT,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Author_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Author_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Document] (
    [id] INT NOT NULL IDENTITY(1,1),
    [title] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(1000),
    [status] NVARCHAR(32) NOT NULL CONSTRAINT [Document_status_df] DEFAULT 'DRAFT',
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Document_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    [clientId] INT NOT NULL,
    CONSTRAINT [Document_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Invoice] (
    [id] INT NOT NULL IDENTITY(1,1),
    [clientId] INT NOT NULL,
    [title] NVARCHAR(1000) NOT NULL,
    [issueDate] DATETIME2 NOT NULL,
    [paymentDate] DATETIME2 NOT NULL,
    [net] FLOAT(53) NOT NULL,
    [vatPerc] INT NOT NULL,
    [vat] FLOAT(53) NOT NULL,
    [gross] FLOAT(53) NOT NULL,
    [status] NVARCHAR(1000) NOT NULL CONSTRAINT [Invoice_status_df] DEFAULT 'issued',
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Invoice_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Invoice_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[BalanceAdjustment] (
    [id] INT NOT NULL IDENTITY(1,1),
    [date] DATETIME2 NOT NULL,
    [amount] FLOAT(53) NOT NULL,
    [description] NVARCHAR(1000),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [BalanceAdjustment_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [BalanceAdjustment_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Author] ADD CONSTRAINT [Author_clientId_fkey] FOREIGN KEY ([clientId]) REFERENCES [dbo].[Client]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Document] ADD CONSTRAINT [Document_clientId_fkey] FOREIGN KEY ([clientId]) REFERENCES [dbo].[Client]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Invoice] ADD CONSTRAINT [Invoice_clientId_fkey] FOREIGN KEY ([clientId]) REFERENCES [dbo].[Client]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
