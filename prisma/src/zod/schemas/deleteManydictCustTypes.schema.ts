import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCustTypesWhereInputObjectSchema as dictCustTypesWhereInputObjectSchema } from './objects/dictCustTypesWhereInput.schema';

export const dictCustTypesDeleteManySchema: z.ZodType<Prisma.dictCustTypesDeleteManyArgs> = z.object({ where: dictCustTypesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictCustTypesDeleteManyArgs>;

export const dictCustTypesDeleteManyZodSchema = z.object({ where: dictCustTypesWhereInputObjectSchema.optional() }).strict();