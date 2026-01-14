import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblSubmEventsSelectObjectSchema as tblSubmEventsSelectObjectSchema } from './objects/tblSubmEventsSelect.schema';
import { tblSubmEventsIncludeObjectSchema as tblSubmEventsIncludeObjectSchema } from './objects/tblSubmEventsInclude.schema';
import { tblSubmEventsWhereUniqueInputObjectSchema as tblSubmEventsWhereUniqueInputObjectSchema } from './objects/tblSubmEventsWhereUniqueInput.schema';

export const tblSubmEventsFindUniqueSchema: z.ZodType<Prisma.tblSubmEventsFindUniqueArgs> = z.object({ select: tblSubmEventsSelectObjectSchema.optional(), include: tblSubmEventsIncludeObjectSchema.optional(), where: tblSubmEventsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblSubmEventsFindUniqueArgs>;

export const tblSubmEventsFindUniqueZodSchema = z.object({ select: tblSubmEventsSelectObjectSchema.optional(), include: tblSubmEventsIncludeObjectSchema.optional(), where: tblSubmEventsWhereUniqueInputObjectSchema }).strict();