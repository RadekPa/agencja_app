import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTransferDetailIncludeObjectSchema as ArTransferDetailIncludeObjectSchema } from './objects/ArTransferDetailInclude.schema';
import { ArTransferDetailOrderByWithRelationInputObjectSchema as ArTransferDetailOrderByWithRelationInputObjectSchema } from './objects/ArTransferDetailOrderByWithRelationInput.schema';
import { ArTransferDetailWhereInputObjectSchema as ArTransferDetailWhereInputObjectSchema } from './objects/ArTransferDetailWhereInput.schema';
import { ArTransferDetailWhereUniqueInputObjectSchema as ArTransferDetailWhereUniqueInputObjectSchema } from './objects/ArTransferDetailWhereUniqueInput.schema';
import { ArTransferDetailScalarFieldEnumSchema } from './enums/ArTransferDetailScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ArTransferDetailFindFirstSelectSchema: z.ZodType<Prisma.ArTransferDetailSelect> = z.object({
    TransferID: z.boolean().optional(),
    DebitID: z.boolean().optional(),
    AmtWired: z.boolean().optional(),
    Notes: z.boolean().optional(),
    ArTransaction: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ArTransferDetailSelect>;

export const ArTransferDetailFindFirstSelectZodSchema = z.object({
    TransferID: z.boolean().optional(),
    DebitID: z.boolean().optional(),
    AmtWired: z.boolean().optional(),
    Notes: z.boolean().optional(),
    ArTransaction: z.boolean().optional()
  }).strict();

export const ArTransferDetailFindFirstSchema: z.ZodType<Prisma.ArTransferDetailFindFirstArgs> = z.object({ select: ArTransferDetailFindFirstSelectSchema.optional(), include: z.lazy(() => ArTransferDetailIncludeObjectSchema.optional()), orderBy: z.union([ArTransferDetailOrderByWithRelationInputObjectSchema, ArTransferDetailOrderByWithRelationInputObjectSchema.array()]).optional(), where: ArTransferDetailWhereInputObjectSchema.optional(), cursor: ArTransferDetailWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ArTransferDetailScalarFieldEnumSchema, ArTransferDetailScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ArTransferDetailFindFirstArgs>;

export const ArTransferDetailFindFirstZodSchema = z.object({ select: ArTransferDetailFindFirstSelectSchema.optional(), include: z.lazy(() => ArTransferDetailIncludeObjectSchema.optional()), orderBy: z.union([ArTransferDetailOrderByWithRelationInputObjectSchema, ArTransferDetailOrderByWithRelationInputObjectSchema.array()]).optional(), where: ArTransferDetailWhereInputObjectSchema.optional(), cursor: ArTransferDetailWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ArTransferDetailScalarFieldEnumSchema, ArTransferDetailScalarFieldEnumSchema.array()]).optional() }).strict();