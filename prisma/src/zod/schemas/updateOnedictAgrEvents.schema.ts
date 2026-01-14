import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAgrEventsSelectObjectSchema as dictAgrEventsSelectObjectSchema } from './objects/dictAgrEventsSelect.schema';
import { dictAgrEventsIncludeObjectSchema as dictAgrEventsIncludeObjectSchema } from './objects/dictAgrEventsInclude.schema';
import { dictAgrEventsUpdateInputObjectSchema as dictAgrEventsUpdateInputObjectSchema } from './objects/dictAgrEventsUpdateInput.schema';
import { dictAgrEventsUncheckedUpdateInputObjectSchema as dictAgrEventsUncheckedUpdateInputObjectSchema } from './objects/dictAgrEventsUncheckedUpdateInput.schema';
import { dictAgrEventsWhereUniqueInputObjectSchema as dictAgrEventsWhereUniqueInputObjectSchema } from './objects/dictAgrEventsWhereUniqueInput.schema';

export const dictAgrEventsUpdateOneSchema: z.ZodType<Prisma.dictAgrEventsUpdateArgs> = z.object({ select: dictAgrEventsSelectObjectSchema.optional(), include: dictAgrEventsIncludeObjectSchema.optional(), data: z.union([dictAgrEventsUpdateInputObjectSchema, dictAgrEventsUncheckedUpdateInputObjectSchema]), where: dictAgrEventsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictAgrEventsUpdateArgs>;

export const dictAgrEventsUpdateOneZodSchema = z.object({ select: dictAgrEventsSelectObjectSchema.optional(), include: dictAgrEventsIncludeObjectSchema.optional(), data: z.union([dictAgrEventsUpdateInputObjectSchema, dictAgrEventsUncheckedUpdateInputObjectSchema]), where: dictAgrEventsWhereUniqueInputObjectSchema }).strict();