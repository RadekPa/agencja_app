import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRepModesUpdateManyMutationInputObjectSchema as dictRepModesUpdateManyMutationInputObjectSchema } from './objects/dictRepModesUpdateManyMutationInput.schema';
import { dictRepModesWhereInputObjectSchema as dictRepModesWhereInputObjectSchema } from './objects/dictRepModesWhereInput.schema';

export const dictRepModesUpdateManySchema: z.ZodType<Prisma.dictRepModesUpdateManyArgs> = z.object({ data: dictRepModesUpdateManyMutationInputObjectSchema, where: dictRepModesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictRepModesUpdateManyArgs>;

export const dictRepModesUpdateManyZodSchema = z.object({ data: dictRepModesUpdateManyMutationInputObjectSchema, where: dictRepModesWhereInputObjectSchema.optional() }).strict();