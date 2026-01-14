import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictStatesUpdateManyMutationInputObjectSchema as dictStatesUpdateManyMutationInputObjectSchema } from './objects/dictStatesUpdateManyMutationInput.schema';
import { dictStatesWhereInputObjectSchema as dictStatesWhereInputObjectSchema } from './objects/dictStatesWhereInput.schema';

export const dictStatesUpdateManySchema: z.ZodType<Prisma.dictStatesUpdateManyArgs> = z.object({ data: dictStatesUpdateManyMutationInputObjectSchema, where: dictStatesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictStatesUpdateManyArgs>;

export const dictStatesUpdateManyZodSchema = z.object({ data: dictStatesUpdateManyMutationInputObjectSchema, where: dictStatesWhereInputObjectSchema.optional() }).strict();