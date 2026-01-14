import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAgrEventsSelectObjectSchema as dictAgrEventsSelectObjectSchema } from './objects/dictAgrEventsSelect.schema';
import { dictAgrEventsIncludeObjectSchema as dictAgrEventsIncludeObjectSchema } from './objects/dictAgrEventsInclude.schema';
import { dictAgrEventsWhereUniqueInputObjectSchema as dictAgrEventsWhereUniqueInputObjectSchema } from './objects/dictAgrEventsWhereUniqueInput.schema';
import { dictAgrEventsCreateInputObjectSchema as dictAgrEventsCreateInputObjectSchema } from './objects/dictAgrEventsCreateInput.schema';
import { dictAgrEventsUncheckedCreateInputObjectSchema as dictAgrEventsUncheckedCreateInputObjectSchema } from './objects/dictAgrEventsUncheckedCreateInput.schema';
import { dictAgrEventsUpdateInputObjectSchema as dictAgrEventsUpdateInputObjectSchema } from './objects/dictAgrEventsUpdateInput.schema';
import { dictAgrEventsUncheckedUpdateInputObjectSchema as dictAgrEventsUncheckedUpdateInputObjectSchema } from './objects/dictAgrEventsUncheckedUpdateInput.schema';

export const dictAgrEventsUpsertOneSchema: z.ZodType<Prisma.dictAgrEventsUpsertArgs> = z.object({ select: dictAgrEventsSelectObjectSchema.optional(), include: dictAgrEventsIncludeObjectSchema.optional(), where: dictAgrEventsWhereUniqueInputObjectSchema, create: z.union([ dictAgrEventsCreateInputObjectSchema, dictAgrEventsUncheckedCreateInputObjectSchema ]), update: z.union([ dictAgrEventsUpdateInputObjectSchema, dictAgrEventsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.dictAgrEventsUpsertArgs>;

export const dictAgrEventsUpsertOneZodSchema = z.object({ select: dictAgrEventsSelectObjectSchema.optional(), include: dictAgrEventsIncludeObjectSchema.optional(), where: dictAgrEventsWhereUniqueInputObjectSchema, create: z.union([ dictAgrEventsCreateInputObjectSchema, dictAgrEventsUncheckedCreateInputObjectSchema ]), update: z.union([ dictAgrEventsUpdateInputObjectSchema, dictAgrEventsUncheckedUpdateInputObjectSchema ]) }).strict();