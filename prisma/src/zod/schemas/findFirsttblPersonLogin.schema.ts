import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPersonLoginOrderByWithRelationInputObjectSchema as tblPersonLoginOrderByWithRelationInputObjectSchema } from './objects/tblPersonLoginOrderByWithRelationInput.schema';
import { tblPersonLoginWhereInputObjectSchema as tblPersonLoginWhereInputObjectSchema } from './objects/tblPersonLoginWhereInput.schema';
import { tblPersonLoginWhereUniqueInputObjectSchema as tblPersonLoginWhereUniqueInputObjectSchema } from './objects/tblPersonLoginWhereUniqueInput.schema';
import { TblPersonLoginScalarFieldEnumSchema } from './enums/TblPersonLoginScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tblPersonLoginFindFirstSelectSchema: z.ZodType<Prisma.tblPersonLoginSelect> = z.object({
    PersonID: z.boolean().optional(),
    Login: z.boolean().optional(),
    DateBegin: z.boolean().optional(),
    DateEnd: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tblPersonLoginSelect>;

export const tblPersonLoginFindFirstSelectZodSchema = z.object({
    PersonID: z.boolean().optional(),
    Login: z.boolean().optional(),
    DateBegin: z.boolean().optional(),
    DateEnd: z.boolean().optional()
  }).strict();

export const tblPersonLoginFindFirstSchema: z.ZodType<Prisma.tblPersonLoginFindFirstArgs> = z.object({ select: tblPersonLoginFindFirstSelectSchema.optional(),  orderBy: z.union([tblPersonLoginOrderByWithRelationInputObjectSchema, tblPersonLoginOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblPersonLoginWhereInputObjectSchema.optional(), cursor: tblPersonLoginWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblPersonLoginScalarFieldEnumSchema, TblPersonLoginScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tblPersonLoginFindFirstArgs>;

export const tblPersonLoginFindFirstZodSchema = z.object({ select: tblPersonLoginFindFirstSelectSchema.optional(),  orderBy: z.union([tblPersonLoginOrderByWithRelationInputObjectSchema, tblPersonLoginOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblPersonLoginWhereInputObjectSchema.optional(), cursor: tblPersonLoginWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblPersonLoginScalarFieldEnumSchema, TblPersonLoginScalarFieldEnumSchema.array()]).optional() }).strict();