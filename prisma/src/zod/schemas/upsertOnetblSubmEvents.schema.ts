import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblSubmEventsSelectObjectSchema as tblSubmEventsSelectObjectSchema } from './objects/tblSubmEventsSelect.schema';
import { tblSubmEventsIncludeObjectSchema as tblSubmEventsIncludeObjectSchema } from './objects/tblSubmEventsInclude.schema';
import { tblSubmEventsWhereUniqueInputObjectSchema as tblSubmEventsWhereUniqueInputObjectSchema } from './objects/tblSubmEventsWhereUniqueInput.schema';
import { tblSubmEventsCreateInputObjectSchema as tblSubmEventsCreateInputObjectSchema } from './objects/tblSubmEventsCreateInput.schema';
import { tblSubmEventsUncheckedCreateInputObjectSchema as tblSubmEventsUncheckedCreateInputObjectSchema } from './objects/tblSubmEventsUncheckedCreateInput.schema';
import { tblSubmEventsUpdateInputObjectSchema as tblSubmEventsUpdateInputObjectSchema } from './objects/tblSubmEventsUpdateInput.schema';
import { tblSubmEventsUncheckedUpdateInputObjectSchema as tblSubmEventsUncheckedUpdateInputObjectSchema } from './objects/tblSubmEventsUncheckedUpdateInput.schema';

export const tblSubmEventsUpsertOneSchema: z.ZodType<Prisma.tblSubmEventsUpsertArgs> = z.object({ select: tblSubmEventsSelectObjectSchema.optional(), include: tblSubmEventsIncludeObjectSchema.optional(), where: tblSubmEventsWhereUniqueInputObjectSchema, create: z.union([ tblSubmEventsCreateInputObjectSchema, tblSubmEventsUncheckedCreateInputObjectSchema ]), update: z.union([ tblSubmEventsUpdateInputObjectSchema, tblSubmEventsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.tblSubmEventsUpsertArgs>;

export const tblSubmEventsUpsertOneZodSchema = z.object({ select: tblSubmEventsSelectObjectSchema.optional(), include: tblSubmEventsIncludeObjectSchema.optional(), where: tblSubmEventsWhereUniqueInputObjectSchema, create: z.union([ tblSubmEventsCreateInputObjectSchema, tblSubmEventsUncheckedCreateInputObjectSchema ]), update: z.union([ tblSubmEventsUpdateInputObjectSchema, tblSubmEventsUncheckedUpdateInputObjectSchema ]) }).strict();