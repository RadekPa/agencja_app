import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCustTypesSelectObjectSchema as dictCustTypesSelectObjectSchema } from './objects/dictCustTypesSelect.schema';
import { dictCustTypesIncludeObjectSchema as dictCustTypesIncludeObjectSchema } from './objects/dictCustTypesInclude.schema';
import { dictCustTypesWhereUniqueInputObjectSchema as dictCustTypesWhereUniqueInputObjectSchema } from './objects/dictCustTypesWhereUniqueInput.schema';
import { dictCustTypesCreateInputObjectSchema as dictCustTypesCreateInputObjectSchema } from './objects/dictCustTypesCreateInput.schema';
import { dictCustTypesUncheckedCreateInputObjectSchema as dictCustTypesUncheckedCreateInputObjectSchema } from './objects/dictCustTypesUncheckedCreateInput.schema';
import { dictCustTypesUpdateInputObjectSchema as dictCustTypesUpdateInputObjectSchema } from './objects/dictCustTypesUpdateInput.schema';
import { dictCustTypesUncheckedUpdateInputObjectSchema as dictCustTypesUncheckedUpdateInputObjectSchema } from './objects/dictCustTypesUncheckedUpdateInput.schema';

export const dictCustTypesUpsertOneSchema: z.ZodType<Prisma.dictCustTypesUpsertArgs> = z.object({ select: dictCustTypesSelectObjectSchema.optional(), include: dictCustTypesIncludeObjectSchema.optional(), where: dictCustTypesWhereUniqueInputObjectSchema, create: z.union([ dictCustTypesCreateInputObjectSchema, dictCustTypesUncheckedCreateInputObjectSchema ]), update: z.union([ dictCustTypesUpdateInputObjectSchema, dictCustTypesUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.dictCustTypesUpsertArgs>;

export const dictCustTypesUpsertOneZodSchema = z.object({ select: dictCustTypesSelectObjectSchema.optional(), include: dictCustTypesIncludeObjectSchema.optional(), where: dictCustTypesWhereUniqueInputObjectSchema, create: z.union([ dictCustTypesCreateInputObjectSchema, dictCustTypesUncheckedCreateInputObjectSchema ]), update: z.union([ dictCustTypesUpdateInputObjectSchema, dictCustTypesUncheckedUpdateInputObjectSchema ]) }).strict();