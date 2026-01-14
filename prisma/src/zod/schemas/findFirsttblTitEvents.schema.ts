import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitEventsIncludeObjectSchema as tblTitEventsIncludeObjectSchema } from './objects/tblTitEventsInclude.schema';
import { tblTitEventsOrderByWithRelationInputObjectSchema as tblTitEventsOrderByWithRelationInputObjectSchema } from './objects/tblTitEventsOrderByWithRelationInput.schema';
import { tblTitEventsWhereInputObjectSchema as tblTitEventsWhereInputObjectSchema } from './objects/tblTitEventsWhereInput.schema';
import { tblTitEventsWhereUniqueInputObjectSchema as tblTitEventsWhereUniqueInputObjectSchema } from './objects/tblTitEventsWhereUniqueInput.schema';
import { TblTitEventsScalarFieldEnumSchema } from './enums/TblTitEventsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tblTitEventsFindFirstSelectSchema: z.ZodType<Prisma.tblTitEventsSelect> = z.object({
    TitEventID: z.boolean().optional(),
    CopyTypeID: z.boolean().optional(),
    EventCode: z.boolean().optional(),
    TitleID: z.boolean().optional(),
    EventDate: z.boolean().optional(),
    NoOfCopies: z.boolean().optional(),
    EndDate: z.boolean().optional(),
    tblTitles: z.boolean().optional(),
    dictEvents: z.boolean().optional(),
    dictCopyType: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tblTitEventsSelect>;

export const tblTitEventsFindFirstSelectZodSchema = z.object({
    TitEventID: z.boolean().optional(),
    CopyTypeID: z.boolean().optional(),
    EventCode: z.boolean().optional(),
    TitleID: z.boolean().optional(),
    EventDate: z.boolean().optional(),
    NoOfCopies: z.boolean().optional(),
    EndDate: z.boolean().optional(),
    tblTitles: z.boolean().optional(),
    dictEvents: z.boolean().optional(),
    dictCopyType: z.boolean().optional()
  }).strict();

export const tblTitEventsFindFirstSchema: z.ZodType<Prisma.tblTitEventsFindFirstArgs> = z.object({ select: tblTitEventsFindFirstSelectSchema.optional(), include: z.lazy(() => tblTitEventsIncludeObjectSchema.optional()), orderBy: z.union([tblTitEventsOrderByWithRelationInputObjectSchema, tblTitEventsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblTitEventsWhereInputObjectSchema.optional(), cursor: tblTitEventsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblTitEventsScalarFieldEnumSchema, TblTitEventsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tblTitEventsFindFirstArgs>;

export const tblTitEventsFindFirstZodSchema = z.object({ select: tblTitEventsFindFirstSelectSchema.optional(), include: z.lazy(() => tblTitEventsIncludeObjectSchema.optional()), orderBy: z.union([tblTitEventsOrderByWithRelationInputObjectSchema, tblTitEventsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblTitEventsWhereInputObjectSchema.optional(), cursor: tblTitEventsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblTitEventsScalarFieldEnumSchema, TblTitEventsScalarFieldEnumSchema.array()]).optional() }).strict();