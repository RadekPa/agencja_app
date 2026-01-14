import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblSubmEventsSelectObjectSchema as tblSubmEventsSelectObjectSchema } from './objects/tblSubmEventsSelect.schema';
import { tblSubmEventsIncludeObjectSchema as tblSubmEventsIncludeObjectSchema } from './objects/tblSubmEventsInclude.schema';
import { tblSubmEventsUpdateInputObjectSchema as tblSubmEventsUpdateInputObjectSchema } from './objects/tblSubmEventsUpdateInput.schema';
import { tblSubmEventsUncheckedUpdateInputObjectSchema as tblSubmEventsUncheckedUpdateInputObjectSchema } from './objects/tblSubmEventsUncheckedUpdateInput.schema';
import { tblSubmEventsWhereUniqueInputObjectSchema as tblSubmEventsWhereUniqueInputObjectSchema } from './objects/tblSubmEventsWhereUniqueInput.schema';

export const tblSubmEventsUpdateOneSchema: z.ZodType<Prisma.tblSubmEventsUpdateArgs> = z.object({ select: tblSubmEventsSelectObjectSchema.optional(), include: tblSubmEventsIncludeObjectSchema.optional(), data: z.union([tblSubmEventsUpdateInputObjectSchema, tblSubmEventsUncheckedUpdateInputObjectSchema]), where: tblSubmEventsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblSubmEventsUpdateArgs>;

export const tblSubmEventsUpdateOneZodSchema = z.object({ select: tblSubmEventsSelectObjectSchema.optional(), include: tblSubmEventsIncludeObjectSchema.optional(), data: z.union([tblSubmEventsUpdateInputObjectSchema, tblSubmEventsUncheckedUpdateInputObjectSchema]), where: tblSubmEventsWhereUniqueInputObjectSchema }).strict();