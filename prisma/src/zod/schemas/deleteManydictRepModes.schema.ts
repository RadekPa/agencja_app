import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRepModesWhereInputObjectSchema as dictRepModesWhereInputObjectSchema } from './objects/dictRepModesWhereInput.schema';

export const dictRepModesDeleteManySchema: z.ZodType<Prisma.dictRepModesDeleteManyArgs> = z.object({ where: dictRepModesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictRepModesDeleteManyArgs>;

export const dictRepModesDeleteManyZodSchema = z.object({ where: dictRepModesWhereInputObjectSchema.optional() }).strict();