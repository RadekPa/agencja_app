import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PearsonAdvAndRoyOrderByWithRelationInputObjectSchema as PearsonAdvAndRoyOrderByWithRelationInputObjectSchema } from './objects/PearsonAdvAndRoyOrderByWithRelationInput.schema';
import { PearsonAdvAndRoyWhereInputObjectSchema as PearsonAdvAndRoyWhereInputObjectSchema } from './objects/PearsonAdvAndRoyWhereInput.schema';
import { PearsonAdvAndRoyWhereUniqueInputObjectSchema as PearsonAdvAndRoyWhereUniqueInputObjectSchema } from './objects/PearsonAdvAndRoyWhereUniqueInput.schema';
import { PearsonAdvAndRoyScalarFieldEnumSchema } from './enums/PearsonAdvAndRoyScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PearsonAdvAndRoyFindManySelectSchema: z.ZodType<Prisma.PearsonAdvAndRoySelect> = z.object({
    ContractID: z.boolean().optional(),
    ISBN: z.boolean().optional(),
    ContractDate: z.boolean().optional(),
    PublisherName: z.boolean().optional(),
    TermDate: z.boolean().optional(),
    Status: z.boolean().optional(),
    Title: z.boolean().optional(),
    AuthorNames: z.boolean().optional(),
    Edition: z.boolean().optional(),
    BBD: z.boolean().optional(),
    CopyrightYear: z.boolean().optional(),
    SeriesName: z.boolean().optional(),
    FISBN: z.boolean().optional(),
    IsPublished: z.boolean().optional(),
    SamplesReceivedDate: z.boolean().optional(),
    PubDate: z.boolean().optional(),
    RequiredToPublish: z.boolean().optional(),
    IsPaid: z.boolean().optional(),
    TotalAdvances: z.boolean().optional(),
    TotalRoyalties: z.boolean().optional(),
    Last_Royalty_Period_Reported: z.boolean().optional(),
    Date_Royalty_Paid: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.PearsonAdvAndRoySelect>;

export const PearsonAdvAndRoyFindManySelectZodSchema = z.object({
    ContractID: z.boolean().optional(),
    ISBN: z.boolean().optional(),
    ContractDate: z.boolean().optional(),
    PublisherName: z.boolean().optional(),
    TermDate: z.boolean().optional(),
    Status: z.boolean().optional(),
    Title: z.boolean().optional(),
    AuthorNames: z.boolean().optional(),
    Edition: z.boolean().optional(),
    BBD: z.boolean().optional(),
    CopyrightYear: z.boolean().optional(),
    SeriesName: z.boolean().optional(),
    FISBN: z.boolean().optional(),
    IsPublished: z.boolean().optional(),
    SamplesReceivedDate: z.boolean().optional(),
    PubDate: z.boolean().optional(),
    RequiredToPublish: z.boolean().optional(),
    IsPaid: z.boolean().optional(),
    TotalAdvances: z.boolean().optional(),
    TotalRoyalties: z.boolean().optional(),
    Last_Royalty_Period_Reported: z.boolean().optional(),
    Date_Royalty_Paid: z.boolean().optional()
  }).strict();

export const PearsonAdvAndRoyFindManySchema: z.ZodType<Prisma.PearsonAdvAndRoyFindManyArgs> = z.object({ select: PearsonAdvAndRoyFindManySelectSchema.optional(),  orderBy: z.union([PearsonAdvAndRoyOrderByWithRelationInputObjectSchema, PearsonAdvAndRoyOrderByWithRelationInputObjectSchema.array()]).optional(), where: PearsonAdvAndRoyWhereInputObjectSchema.optional(), cursor: PearsonAdvAndRoyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PearsonAdvAndRoyScalarFieldEnumSchema, PearsonAdvAndRoyScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.PearsonAdvAndRoyFindManyArgs>;

export const PearsonAdvAndRoyFindManyZodSchema = z.object({ select: PearsonAdvAndRoyFindManySelectSchema.optional(),  orderBy: z.union([PearsonAdvAndRoyOrderByWithRelationInputObjectSchema, PearsonAdvAndRoyOrderByWithRelationInputObjectSchema.array()]).optional(), where: PearsonAdvAndRoyWhereInputObjectSchema.optional(), cursor: PearsonAdvAndRoyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PearsonAdvAndRoyScalarFieldEnumSchema, PearsonAdvAndRoyScalarFieldEnumSchema.array()]).optional() }).strict();