import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictMatTypeSelectObjectSchema as dictMatTypeSelectObjectSchema } from './objects/dictMatTypeSelect.schema';
import { dictMatTypeCreateInputObjectSchema as dictMatTypeCreateInputObjectSchema } from './objects/dictMatTypeCreateInput.schema';
import { dictMatTypeUncheckedCreateInputObjectSchema as dictMatTypeUncheckedCreateInputObjectSchema } from './objects/dictMatTypeUncheckedCreateInput.schema';

export const dictMatTypeCreateOneSchema: z.ZodType<Prisma.dictMatTypeCreateArgs> = z.object({ select: dictMatTypeSelectObjectSchema.optional(),  data: z.union([dictMatTypeCreateInputObjectSchema, dictMatTypeUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.dictMatTypeCreateArgs>;

export const dictMatTypeCreateOneZodSchema = z.object({ select: dictMatTypeSelectObjectSchema.optional(),  data: z.union([dictMatTypeCreateInputObjectSchema, dictMatTypeUncheckedCreateInputObjectSchema]) }).strict();