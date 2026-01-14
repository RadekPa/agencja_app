import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCustTypesSelectObjectSchema as dictCustTypesSelectObjectSchema } from './objects/dictCustTypesSelect.schema';
import { dictCustTypesIncludeObjectSchema as dictCustTypesIncludeObjectSchema } from './objects/dictCustTypesInclude.schema';
import { dictCustTypesUpdateInputObjectSchema as dictCustTypesUpdateInputObjectSchema } from './objects/dictCustTypesUpdateInput.schema';
import { dictCustTypesUncheckedUpdateInputObjectSchema as dictCustTypesUncheckedUpdateInputObjectSchema } from './objects/dictCustTypesUncheckedUpdateInput.schema';
import { dictCustTypesWhereUniqueInputObjectSchema as dictCustTypesWhereUniqueInputObjectSchema } from './objects/dictCustTypesWhereUniqueInput.schema';

export const dictCustTypesUpdateOneSchema: z.ZodType<Prisma.dictCustTypesUpdateArgs> = z.object({ select: dictCustTypesSelectObjectSchema.optional(), include: dictCustTypesIncludeObjectSchema.optional(), data: z.union([dictCustTypesUpdateInputObjectSchema, dictCustTypesUncheckedUpdateInputObjectSchema]), where: dictCustTypesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictCustTypesUpdateArgs>;

export const dictCustTypesUpdateOneZodSchema = z.object({ select: dictCustTypesSelectObjectSchema.optional(), include: dictCustTypesIncludeObjectSchema.optional(), data: z.union([dictCustTypesUpdateInputObjectSchema, dictCustTypesUncheckedUpdateInputObjectSchema]), where: dictCustTypesWhereUniqueInputObjectSchema }).strict();