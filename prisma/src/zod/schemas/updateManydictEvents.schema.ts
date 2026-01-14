import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictEventsUpdateManyMutationInputObjectSchema as dictEventsUpdateManyMutationInputObjectSchema } from './objects/dictEventsUpdateManyMutationInput.schema';
import { dictEventsWhereInputObjectSchema as dictEventsWhereInputObjectSchema } from './objects/dictEventsWhereInput.schema';

export const dictEventsUpdateManySchema: z.ZodType<Prisma.dictEventsUpdateManyArgs> = z.object({ data: dictEventsUpdateManyMutationInputObjectSchema, where: dictEventsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictEventsUpdateManyArgs>;

export const dictEventsUpdateManyZodSchema = z.object({ data: dictEventsUpdateManyMutationInputObjectSchema, where: dictEventsWhereInputObjectSchema.optional() }).strict();