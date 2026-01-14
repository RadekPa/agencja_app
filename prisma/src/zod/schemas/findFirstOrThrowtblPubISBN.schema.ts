import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPubISBNIncludeObjectSchema as tblPubISBNIncludeObjectSchema } from './objects/tblPubISBNInclude.schema';
import { tblPubISBNOrderByWithRelationInputObjectSchema as tblPubISBNOrderByWithRelationInputObjectSchema } from './objects/tblPubISBNOrderByWithRelationInput.schema';
import { tblPubISBNWhereInputObjectSchema as tblPubISBNWhereInputObjectSchema } from './objects/tblPubISBNWhereInput.schema';
import { tblPubISBNWhereUniqueInputObjectSchema as tblPubISBNWhereUniqueInputObjectSchema } from './objects/tblPubISBNWhereUniqueInput.schema';
import { TblPubISBNScalarFieldEnumSchema } from './enums/TblPubISBNScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tblPubISBNFindFirstOrThrowSelectSchema: z.ZodType<Prisma.tblPubISBNSelect> = z.object({
    PubID: z.boolean().optional(),
    PubISBN1: z.boolean().optional(),
    PubISBN2: z.boolean().optional(),
    tblPublishers: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tblPubISBNSelect>;

export const tblPubISBNFindFirstOrThrowSelectZodSchema = z.object({
    PubID: z.boolean().optional(),
    PubISBN1: z.boolean().optional(),
    PubISBN2: z.boolean().optional(),
    tblPublishers: z.boolean().optional()
  }).strict();

export const tblPubISBNFindFirstOrThrowSchema: z.ZodType<Prisma.tblPubISBNFindFirstOrThrowArgs> = z.object({ select: tblPubISBNFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => tblPubISBNIncludeObjectSchema.optional()), orderBy: z.union([tblPubISBNOrderByWithRelationInputObjectSchema, tblPubISBNOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblPubISBNWhereInputObjectSchema.optional(), cursor: tblPubISBNWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblPubISBNScalarFieldEnumSchema, TblPubISBNScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tblPubISBNFindFirstOrThrowArgs>;

export const tblPubISBNFindFirstOrThrowZodSchema = z.object({ select: tblPubISBNFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => tblPubISBNIncludeObjectSchema.optional()), orderBy: z.union([tblPubISBNOrderByWithRelationInputObjectSchema, tblPubISBNOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblPubISBNWhereInputObjectSchema.optional(), cursor: tblPubISBNWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblPubISBNScalarFieldEnumSchema, TblPubISBNScalarFieldEnumSchema.array()]).optional() }).strict();