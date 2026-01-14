import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictEventsSelectObjectSchema as dictEventsSelectObjectSchema } from './objects/dictEventsSelect.schema';
import { dictEventsIncludeObjectSchema as dictEventsIncludeObjectSchema } from './objects/dictEventsInclude.schema';
import { dictEventsWhereUniqueInputObjectSchema as dictEventsWhereUniqueInputObjectSchema } from './objects/dictEventsWhereUniqueInput.schema';
import { dictEventsCreateInputObjectSchema as dictEventsCreateInputObjectSchema } from './objects/dictEventsCreateInput.schema';
import { dictEventsUncheckedCreateInputObjectSchema as dictEventsUncheckedCreateInputObjectSchema } from './objects/dictEventsUncheckedCreateInput.schema';
import { dictEventsUpdateInputObjectSchema as dictEventsUpdateInputObjectSchema } from './objects/dictEventsUpdateInput.schema';
import { dictEventsUncheckedUpdateInputObjectSchema as dictEventsUncheckedUpdateInputObjectSchema } from './objects/dictEventsUncheckedUpdateInput.schema';

export const dictEventsUpsertOneSchema: z.ZodType<Prisma.dictEventsUpsertArgs> = z.object({ select: dictEventsSelectObjectSchema.optional(), include: dictEventsIncludeObjectSchema.optional(), where: dictEventsWhereUniqueInputObjectSchema, create: z.union([ dictEventsCreateInputObjectSchema, dictEventsUncheckedCreateInputObjectSchema ]), update: z.union([ dictEventsUpdateInputObjectSchema, dictEventsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.dictEventsUpsertArgs>;

export const dictEventsUpsertOneZodSchema = z.object({ select: dictEventsSelectObjectSchema.optional(), include: dictEventsIncludeObjectSchema.optional(), where: dictEventsWhereUniqueInputObjectSchema, create: z.union([ dictEventsCreateInputObjectSchema, dictEventsUncheckedCreateInputObjectSchema ]), update: z.union([ dictEventsUpdateInputObjectSchema, dictEventsUncheckedUpdateInputObjectSchema ]) }).strict();