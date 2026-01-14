import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAgrEventsSelectObjectSchema as tblAgrEventsSelectObjectSchema } from './objects/tblAgrEventsSelect.schema';
import { tblAgrEventsIncludeObjectSchema as tblAgrEventsIncludeObjectSchema } from './objects/tblAgrEventsInclude.schema';
import { tblAgrEventsWhereUniqueInputObjectSchema as tblAgrEventsWhereUniqueInputObjectSchema } from './objects/tblAgrEventsWhereUniqueInput.schema';
import { tblAgrEventsCreateInputObjectSchema as tblAgrEventsCreateInputObjectSchema } from './objects/tblAgrEventsCreateInput.schema';
import { tblAgrEventsUncheckedCreateInputObjectSchema as tblAgrEventsUncheckedCreateInputObjectSchema } from './objects/tblAgrEventsUncheckedCreateInput.schema';
import { tblAgrEventsUpdateInputObjectSchema as tblAgrEventsUpdateInputObjectSchema } from './objects/tblAgrEventsUpdateInput.schema';
import { tblAgrEventsUncheckedUpdateInputObjectSchema as tblAgrEventsUncheckedUpdateInputObjectSchema } from './objects/tblAgrEventsUncheckedUpdateInput.schema';

export const tblAgrEventsUpsertOneSchema: z.ZodType<Prisma.tblAgrEventsUpsertArgs> = z.object({ select: tblAgrEventsSelectObjectSchema.optional(), include: tblAgrEventsIncludeObjectSchema.optional(), where: tblAgrEventsWhereUniqueInputObjectSchema, create: z.union([ tblAgrEventsCreateInputObjectSchema, tblAgrEventsUncheckedCreateInputObjectSchema ]), update: z.union([ tblAgrEventsUpdateInputObjectSchema, tblAgrEventsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.tblAgrEventsUpsertArgs>;

export const tblAgrEventsUpsertOneZodSchema = z.object({ select: tblAgrEventsSelectObjectSchema.optional(), include: tblAgrEventsIncludeObjectSchema.optional(), where: tblAgrEventsWhereUniqueInputObjectSchema, create: z.union([ tblAgrEventsCreateInputObjectSchema, tblAgrEventsUncheckedCreateInputObjectSchema ]), update: z.union([ tblAgrEventsUpdateInputObjectSchema, tblAgrEventsUncheckedUpdateInputObjectSchema ]) }).strict();