import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblSubmEventsIncludeObjectSchema as tblSubmEventsIncludeObjectSchema } from './objects/tblSubmEventsInclude.schema';
import { tblSubmEventsOrderByWithRelationInputObjectSchema as tblSubmEventsOrderByWithRelationInputObjectSchema } from './objects/tblSubmEventsOrderByWithRelationInput.schema';
import { tblSubmEventsWhereInputObjectSchema as tblSubmEventsWhereInputObjectSchema } from './objects/tblSubmEventsWhereInput.schema';
import { tblSubmEventsWhereUniqueInputObjectSchema as tblSubmEventsWhereUniqueInputObjectSchema } from './objects/tblSubmEventsWhereUniqueInput.schema';
import { TblSubmEventsScalarFieldEnumSchema } from './enums/TblSubmEventsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tblSubmEventsFindFirstSelectSchema: z.ZodType<Prisma.tblSubmEventsSelect> = z.object({
    SubmEventID: z.boolean().optional(),
    SubmID: z.boolean().optional(),
    EventCode: z.boolean().optional(),
    EventDate: z.boolean().optional(),
    NoOfCopies: z.boolean().optional(),
    EndDate: z.boolean().optional(),
    tblSubmissions: z.boolean().optional(),
    dictEvents: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tblSubmEventsSelect>;

export const tblSubmEventsFindFirstSelectZodSchema = z.object({
    SubmEventID: z.boolean().optional(),
    SubmID: z.boolean().optional(),
    EventCode: z.boolean().optional(),
    EventDate: z.boolean().optional(),
    NoOfCopies: z.boolean().optional(),
    EndDate: z.boolean().optional(),
    tblSubmissions: z.boolean().optional(),
    dictEvents: z.boolean().optional()
  }).strict();

export const tblSubmEventsFindFirstSchema: z.ZodType<Prisma.tblSubmEventsFindFirstArgs> = z.object({ select: tblSubmEventsFindFirstSelectSchema.optional(), include: z.lazy(() => tblSubmEventsIncludeObjectSchema.optional()), orderBy: z.union([tblSubmEventsOrderByWithRelationInputObjectSchema, tblSubmEventsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblSubmEventsWhereInputObjectSchema.optional(), cursor: tblSubmEventsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblSubmEventsScalarFieldEnumSchema, TblSubmEventsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tblSubmEventsFindFirstArgs>;

export const tblSubmEventsFindFirstZodSchema = z.object({ select: tblSubmEventsFindFirstSelectSchema.optional(), include: z.lazy(() => tblSubmEventsIncludeObjectSchema.optional()), orderBy: z.union([tblSubmEventsOrderByWithRelationInputObjectSchema, tblSubmEventsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblSubmEventsWhereInputObjectSchema.optional(), cursor: tblSubmEventsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblSubmEventsScalarFieldEnumSchema, TblSubmEventsScalarFieldEnumSchema.array()]).optional() }).strict();