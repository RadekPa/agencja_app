import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAgrEventsUpdateManyMutationInputObjectSchema as dictAgrEventsUpdateManyMutationInputObjectSchema } from './objects/dictAgrEventsUpdateManyMutationInput.schema';
import { dictAgrEventsWhereInputObjectSchema as dictAgrEventsWhereInputObjectSchema } from './objects/dictAgrEventsWhereInput.schema';

export const dictAgrEventsUpdateManySchema: z.ZodType<Prisma.dictAgrEventsUpdateManyArgs> = z.object({ data: dictAgrEventsUpdateManyMutationInputObjectSchema, where: dictAgrEventsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictAgrEventsUpdateManyArgs>;

export const dictAgrEventsUpdateManyZodSchema = z.object({ data: dictAgrEventsUpdateManyMutationInputObjectSchema, where: dictAgrEventsWhereInputObjectSchema.optional() }).strict();