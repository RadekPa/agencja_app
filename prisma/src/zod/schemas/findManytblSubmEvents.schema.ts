import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblSubmEventsIncludeObjectSchema as tblSubmEventsIncludeObjectSchema } from './objects/tblSubmEventsInclude.schema';
import { tblSubmEventsOrderByWithRelationInputObjectSchema as tblSubmEventsOrderByWithRelationInputObjectSchema } from './objects/tblSubmEventsOrderByWithRelationInput.schema';
import { tblSubmEventsWhereInputObjectSchema as tblSubmEventsWhereInputObjectSchema } from './objects/tblSubmEventsWhereInput.schema';
import { tblSubmEventsWhereUniqueInputObjectSchema as tblSubmEventsWhereUniqueInputObjectSchema } from './objects/tblSubmEventsWhereUniqueInput.schema';
import { TblSubmEventsScalarFieldEnumSchema } from './enums/TblSubmEventsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tblSubmEventsFindManySelectSchema: z.ZodType<Prisma.tblSubmEventsSelect> = z.object({
    SubmEventID: z.boolean().optional(),
    SubmID: z.boolean().optional(),
    EventCode: z.boolean().optional(),
    EventDate: z.boolean().optional(),
    NoOfCopies: z.boolean().optional(),
    EndDate: z.boolean().optional(),
    tblSubmissions: z.boolean().optional(),
    dictEvents: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tblSubmEventsSelect>;

export const tblSubmEventsFindManySelectZodSchema = z.object({
    SubmEventID: z.boolean().optional(),
    SubmID: z.boolean().optional(),
    EventCode: z.boolean().optional(),
    EventDate: z.boolean().optional(),
    NoOfCopies: z.boolean().optional(),
    EndDate: z.boolean().optional(),
    tblSubmissions: z.boolean().optional(),
    dictEvents: z.boolean().optional()
  }).strict();

export const tblSubmEventsFindManySchema: z.ZodType<Prisma.tblSubmEventsFindManyArgs> = z.object({ select: tblSubmEventsFindManySelectSchema.optional(), include: z.lazy(() => tblSubmEventsIncludeObjectSchema.optional()), orderBy: z.union([tblSubmEventsOrderByWithRelationInputObjectSchema, tblSubmEventsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblSubmEventsWhereInputObjectSchema.optional(), cursor: tblSubmEventsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblSubmEventsScalarFieldEnumSchema, TblSubmEventsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tblSubmEventsFindManyArgs>;

export const tblSubmEventsFindManyZodSchema = z.object({ select: tblSubmEventsFindManySelectSchema.optional(), include: z.lazy(() => tblSubmEventsIncludeObjectSchema.optional()), orderBy: z.union([tblSubmEventsOrderByWithRelationInputObjectSchema, tblSubmEventsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblSubmEventsWhereInputObjectSchema.optional(), cursor: tblSubmEventsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblSubmEventsScalarFieldEnumSchema, TblSubmEventsScalarFieldEnumSchema.array()]).optional() }).strict();