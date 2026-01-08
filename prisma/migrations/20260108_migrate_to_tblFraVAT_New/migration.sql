/*
  Warnings:

  - You are about to drop the `Invoice` table. If the table has data, all the data will be lost.

*/
-- DropForeignKey
ALTER TABLE [Invoice] DROP CONSTRAINT [Invoice_clientId_fkey];

-- DropTable
DROP TABLE [Invoice];

-- CreateTable
CREATE TABLE [dbo].[tblFraVAT_New] (
    [FVNr] INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    [FVDate] DATETIME2 NOT NULL,
    [FVDateIssued] DATETIME,
    [FVType] SMALLINT,
    [CustID] INT,
    [OrigCurrency] NVARCHAR(max),
    [FVCurrency] NVARCHAR(max),
    [GraalPerc] MONEY,
    [VATCode] NVARCHAR(max),
    [VatPerc] MONEY,
    [NetAmt] MONEY,
    [NetAmtCurr] MONEY,
    [VatAmt] MONEY,
    [XRate] MONEY,
    [VatAmtCurr] MONEY,
    [GrossAmt] MONEY,
    [InvNr] INT,
    [InvAmt] MONEY,
    [Title] NVARCHAR(max),
    [ISBNNr] NVARCHAR(max),
    [PayType] NVARCHAR(max),
    [InvType] NVARCHAR(max),
    [FVDescription] NVARCHAR(max),
    [BilNr] INT,
    [OrigFVNr] INT,
    [CorrectFVNr] INT,
    [CreditID] INT,
    [ApplyID] INT,
    [PayDate] DATE,
    [EnterDate] DATETIME2 DEFAULT GETDATE(),
    [EnterEmployee] NCHAR(10),
    [Status] NCHAR(10),
    CONSTRAINT [tblFraVAT_New_CustID_fkey] FOREIGN KEY ([CustID]) REFERENCES [tblCustomers] ([CustID]) ON DELETE NO ACTION ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX [idx_tblFraVAT_New_CustID] ON [tblFraVAT_New]([CustID]);
CREATE INDEX [idx_tblFraVAT_New_FVDate] ON [tblFraVAT_New]([FVDate]);
CREATE INDEX [idx_tblFraVAT_New_Status] ON [tblFraVAT_New]([Status]);
