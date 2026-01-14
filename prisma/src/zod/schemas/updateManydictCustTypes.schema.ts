import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCustTypesUpdateManyMutationInputObjectSchema as dictCustTypesUpdateManyMutationInputObjectSchema } from './objects/dictCustTypesUpdateManyMutationInput.schema';
import { dictCustTypesWhereInputObjectSchema as dictCustTypesWhereInputObjectSchema } from './objects/dictCustTypesWhereInput.schema';

export const dictCustTypesUpdateManySchema: z.ZodType<Prisma.dictCustTypesUpdateManyArgs> = z.object({ data: dictCustTypesUpdateManyMutationInputObjectSchema, where: dictCustTypesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictCustTypesUpdateManyArgs>;

export const dictCustTypesUpdateManyZodSchema = z.object({ data: dictCustTypesUpdateManyMutationInputObjectSchema, where: dictCustTypesWhereInputObjectSchema.optional() }).strict();