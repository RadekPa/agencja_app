import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblSubmEventsSelectObjectSchema as tblSubmEventsSelectObjectSchema } from './objects/tblSubmEventsSelect.schema';
import { tblSubmEventsIncludeObjectSchema as tblSubmEventsIncludeObjectSchema } from './objects/tblSubmEventsInclude.schema';
import { tblSubmEventsWhereUniqueInputObjectSchema as tblSubmEventsWhereUniqueInputObjectSchema } from './objects/tblSubmEventsWhereUniqueInput.schema';

export const tblSubmEventsDeleteOneSchema: z.ZodType<Prisma.tblSubmEventsDeleteArgs> = z.object({ select: tblSubmEventsSelectObjectSchema.optional(), include: tblSubmEventsIncludeObjectSchema.optional(), where: tblSubmEventsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblSubmEventsDeleteArgs>;

export const tblSubmEventsDeleteOneZodSchema = z.object({ select: tblSubmEventsSelectObjectSchema.optional(), include: tblSubmEventsIncludeObjectSchema.optional(), where: tblSubmEventsWhereUniqueInputObjectSchema }).strict();