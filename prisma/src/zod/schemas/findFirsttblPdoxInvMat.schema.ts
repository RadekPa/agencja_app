import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPdoxInvMatOrderByWithRelationInputObjectSchema as tblPdoxInvMatOrderByWithRelationInputObjectSchema } from './objects/tblPdoxInvMatOrderByWithRelationInput.schema';
import { tblPdoxInvMatWhereInputObjectSchema as tblPdoxInvMatWhereInputObjectSchema } from './objects/tblPdoxInvMatWhereInput.schema';
import { tblPdoxInvMatWhereUniqueInputObjectSchema as tblPdoxInvMatWhereUniqueInputObjectSchema } from './objects/tblPdoxInvMatWhereUniqueInput.schema';
import { TblPdoxInvMatScalarFieldEnumSchema } from './enums/TblPdoxInvMatScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tblPdoxInvMatFindFirstSelectSchema: z.ZodType<Prisma.tblPdoxInvMatSelect> = z.object({
    Invoice_Nr: z.boolean().optional(),
    Title: z.boolean().optional(),
    ISBN: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tblPdoxInvMatSelect>;

export const tblPdoxInvMatFindFirstSelectZodSchema = z.object({
    Invoice_Nr: z.boolean().optional(),
    Title: z.boolean().optional(),
    ISBN: z.boolean().optional()
  }).strict();

export const tblPdoxInvMatFindFirstSchema: z.ZodType<Prisma.tblPdoxInvMatFindFirstArgs> = z.object({ select: tblPdoxInvMatFindFirstSelectSchema.optional(),  orderBy: z.union([tblPdoxInvMatOrderByWithRelationInputObjectSchema, tblPdoxInvMatOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblPdoxInvMatWhereInputObjectSchema.optional(), cursor: tblPdoxInvMatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblPdoxInvMatScalarFieldEnumSchema, TblPdoxInvMatScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tblPdoxInvMatFindFirstArgs>;

export const tblPdoxInvMatFindFirstZodSchema = z.object({ select: tblPdoxInvMatFindFirstSelectSchema.optional(),  orderBy: z.union([tblPdoxInvMatOrderByWithRelationInputObjectSchema, tblPdoxInvMatOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblPdoxInvMatWhereInputObjectSchema.optional(), cursor: tblPdoxInvMatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblPdoxInvMatScalarFieldEnumSchema, TblPdoxInvMatScalarFieldEnumSchema.array()]).optional() }).strict();