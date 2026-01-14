import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictEventsSelectObjectSchema as dictEventsSelectObjectSchema } from './objects/dictEventsSelect.schema';
import { dictEventsIncludeObjectSchema as dictEventsIncludeObjectSchema } from './objects/dictEventsInclude.schema';
import { dictEventsUpdateInputObjectSchema as dictEventsUpdateInputObjectSchema } from './objects/dictEventsUpdateInput.schema';
import { dictEventsUncheckedUpdateInputObjectSchema as dictEventsUncheckedUpdateInputObjectSchema } from './objects/dictEventsUncheckedUpdateInput.schema';
import { dictEventsWhereUniqueInputObjectSchema as dictEventsWhereUniqueInputObjectSchema } from './objects/dictEventsWhereUniqueInput.schema';

export const dictEventsUpdateOneSchema: z.ZodType<Prisma.dictEventsUpdateArgs> = z.object({ select: dictEventsSelectObjectSchema.optional(), include: dictEventsIncludeObjectSchema.optional(), data: z.union([dictEventsUpdateInputObjectSchema, dictEventsUncheckedUpdateInputObjectSchema]), where: dictEventsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictEventsUpdateArgs>;

export const dictEventsUpdateOneZodSchema = z.object({ select: dictEventsSelectObjectSchema.optional(), include: dictEventsIncludeObjectSchema.optional(), data: z.union([dictEventsUpdateInputObjectSchema, dictEventsUncheckedUpdateInputObjectSchema]), where: dictEventsWhereUniqueInputObjectSchema }).strict();