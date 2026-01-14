import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPublishersIncludeObjectSchema as tblPublishersIncludeObjectSchema } from './objects/tblPublishersInclude.schema';
import { tblPublishersOrderByWithRelationInputObjectSchema as tblPublishersOrderByWithRelationInputObjectSchema } from './objects/tblPublishersOrderByWithRelationInput.schema';
import { tblPublishersWhereInputObjectSchema as tblPublishersWhereInputObjectSchema } from './objects/tblPublishersWhereInput.schema';
import { tblPublishersWhereUniqueInputObjectSchema as tblPublishersWhereUniqueInputObjectSchema } from './objects/tblPublishersWhereUniqueInput.schema';
import { TblPublishersScalarFieldEnumSchema } from './enums/TblPublishersScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tblPublishersFindManySelectSchema: z.ZodType<Prisma.tblPublishersSelect> = z.object({
    PubID: z.boolean().optional(),
    PubName: z.boolean().optional(),
    PubAbb: z.boolean().optional(),
    ParentPubID: z.boolean().optional(),
    tblPubISBN: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tblPublishersSelect>;

export const tblPublishersFindManySelectZodSchema = z.object({
    PubID: z.boolean().optional(),
    PubName: z.boolean().optional(),
    PubAbb: z.boolean().optional(),
    ParentPubID: z.boolean().optional(),
    tblPubISBN: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const tblPublishersFindManySchema: z.ZodType<Prisma.tblPublishersFindManyArgs> = z.object({ select: tblPublishersFindManySelectSchema.optional(), include: z.lazy(() => tblPublishersIncludeObjectSchema.optional()), orderBy: z.union([tblPublishersOrderByWithRelationInputObjectSchema, tblPublishersOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblPublishersWhereInputObjectSchema.optional(), cursor: tblPublishersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblPublishersScalarFieldEnumSchema, TblPublishersScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tblPublishersFindManyArgs>;

export const tblPublishersFindManyZodSchema = z.object({ select: tblPublishersFindManySelectSchema.optional(), include: z.lazy(() => tblPublishersIncludeObjectSchema.optional()), orderBy: z.union([tblPublishersOrderByWithRelationInputObjectSchema, tblPublishersOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblPublishersWhereInputObjectSchema.optional(), cursor: tblPublishersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblPublishersScalarFieldEnumSchema, TblPublishersScalarFieldEnumSchema.array()]).optional() }).strict();