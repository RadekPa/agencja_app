import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAdvTypeSelectObjectSchema as dictAdvTypeSelectObjectSchema } from './objects/dictAdvTypeSelect.schema';
import { dictAdvTypeCreateInputObjectSchema as dictAdvTypeCreateInputObjectSchema } from './objects/dictAdvTypeCreateInput.schema';
import { dictAdvTypeUncheckedCreateInputObjectSchema as dictAdvTypeUncheckedCreateInputObjectSchema } from './objects/dictAdvTypeUncheckedCreateInput.schema';

export const dictAdvTypeCreateOneSchema: z.ZodType<Prisma.dictAdvTypeCreateArgs> = z.object({ select: dictAdvTypeSelectObjectSchema.optional(),  data: z.union([dictAdvTypeCreateInputObjectSchema, dictAdvTypeUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.dictAdvTypeCreateArgs>;

export const dictAdvTypeCreateOneZodSchema = z.object({ select: dictAdvTypeSelectObjectSchema.optional(),  data: z.union([dictAdvTypeCreateInputObjectSchema, dictAdvTypeUncheckedCreateInputObjectSchema]) }).strict();