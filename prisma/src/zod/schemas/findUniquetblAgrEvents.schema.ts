import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAgrEventsSelectObjectSchema as tblAgrEventsSelectObjectSchema } from './objects/tblAgrEventsSelect.schema';
import { tblAgrEventsIncludeObjectSchema as tblAgrEventsIncludeObjectSchema } from './objects/tblAgrEventsInclude.schema';
import { tblAgrEventsWhereUniqueInputObjectSchema as tblAgrEventsWhereUniqueInputObjectSchema } from './objects/tblAgrEventsWhereUniqueInput.schema';

export const tblAgrEventsFindUniqueSchema: z.ZodType<Prisma.tblAgrEventsFindUniqueArgs> = z.object({ select: tblAgrEventsSelectObjectSchema.optional(), include: tblAgrEventsIncludeObjectSchema.optional(), where: tblAgrEventsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblAgrEventsFindUniqueArgs>;

export const tblAgrEventsFindUniqueZodSchema = z.object({ select: tblAgrEventsSelectObjectSchema.optional(), include: tblAgrEventsIncludeObjectSchema.optional(), where: tblAgrEventsWhereUniqueInputObjectSchema }).strict();