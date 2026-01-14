import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPersonContractTypeOrderByWithRelationInputObjectSchema as tblPersonContractTypeOrderByWithRelationInputObjectSchema } from './objects/tblPersonContractTypeOrderByWithRelationInput.schema';
import { tblPersonContractTypeWhereInputObjectSchema as tblPersonContractTypeWhereInputObjectSchema } from './objects/tblPersonContractTypeWhereInput.schema';
import { tblPersonContractTypeWhereUniqueInputObjectSchema as tblPersonContractTypeWhereUniqueInputObjectSchema } from './objects/tblPersonContractTypeWhereUniqueInput.schema';
import { TblPersonContractTypeScalarFieldEnumSchema } from './enums/TblPersonContractTypeScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tblPersonContractTypeFindFirstSelectSchema: z.ZodType<Prisma.tblPersonContractTypeSelect> = z.object({
    CTypeID: z.boolean().optional(),
    CTypeDescr: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tblPersonContractTypeSelect>;

export const tblPersonContractTypeFindFirstSelectZodSchema = z.object({
    CTypeID: z.boolean().optional(),
    CTypeDescr: z.boolean().optional()
  }).strict();

export const tblPersonContractTypeFindFirstSchema: z.ZodType<Prisma.tblPersonContractTypeFindFirstArgs> = z.object({ select: tblPersonContractTypeFindFirstSelectSchema.optional(),  orderBy: z.union([tblPersonContractTypeOrderByWithRelationInputObjectSchema, tblPersonContractTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblPersonContractTypeWhereInputObjectSchema.optional(), cursor: tblPersonContractTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblPersonContractTypeScalarFieldEnumSchema, TblPersonContractTypeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tblPersonContractTypeFindFirstArgs>;

export const tblPersonContractTypeFindFirstZodSchema = z.object({ select: tblPersonContractTypeFindFirstSelectSchema.optional(),  orderBy: z.union([tblPersonContractTypeOrderByWithRelationInputObjectSchema, tblPersonContractTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblPersonContractTypeWhereInputObjectSchema.optional(), cursor: tblPersonContractTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblPersonContractTypeScalarFieldEnumSchema, TblPersonContractTypeScalarFieldEnumSchema.array()]).optional() }).strict();