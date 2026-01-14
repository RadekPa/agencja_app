import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCustTypesSelectObjectSchema as dictCustTypesSelectObjectSchema } from './objects/dictCustTypesSelect.schema';
import { dictCustTypesIncludeObjectSchema as dictCustTypesIncludeObjectSchema } from './objects/dictCustTypesInclude.schema';
import { dictCustTypesCreateInputObjectSchema as dictCustTypesCreateInputObjectSchema } from './objects/dictCustTypesCreateInput.schema';
import { dictCustTypesUncheckedCreateInputObjectSchema as dictCustTypesUncheckedCreateInputObjectSchema } from './objects/dictCustTypesUncheckedCreateInput.schema';

export const dictCustTypesCreateOneSchema: z.ZodType<Prisma.dictCustTypesCreateArgs> = z.object({ select: dictCustTypesSelectObjectSchema.optional(), include: dictCustTypesIncludeObjectSchema.optional(), data: z.union([dictCustTypesCreateInputObjectSchema, dictCustTypesUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.dictCustTypesCreateArgs>;

export const dictCustTypesCreateOneZodSchema = z.object({ select: dictCustTypesSelectObjectSchema.optional(), include: dictCustTypesIncludeObjectSchema.optional(), data: z.union([dictCustTypesCreateInputObjectSchema, dictCustTypesUncheckedCreateInputObjectSchema]) }).strict();