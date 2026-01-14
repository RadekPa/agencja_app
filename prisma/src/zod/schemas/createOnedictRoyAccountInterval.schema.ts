import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRoyAccountIntervalSelectObjectSchema as dictRoyAccountIntervalSelectObjectSchema } from './objects/dictRoyAccountIntervalSelect.schema';
import { dictRoyAccountIntervalIncludeObjectSchema as dictRoyAccountIntervalIncludeObjectSchema } from './objects/dictRoyAccountIntervalInclude.schema';
import { dictRoyAccountIntervalCreateInputObjectSchema as dictRoyAccountIntervalCreateInputObjectSchema } from './objects/dictRoyAccountIntervalCreateInput.schema';
import { dictRoyAccountIntervalUncheckedCreateInputObjectSchema as dictRoyAccountIntervalUncheckedCreateInputObjectSchema } from './objects/dictRoyAccountIntervalUncheckedCreateInput.schema';

export const dictRoyAccountIntervalCreateOneSchema: z.ZodType<Prisma.dictRoyAccountIntervalCreateArgs> = z.object({ select: dictRoyAccountIntervalSelectObjectSchema.optional(), include: dictRoyAccountIntervalIncludeObjectSchema.optional(), data: z.union([dictRoyAccountIntervalCreateInputObjectSchema, dictRoyAccountIntervalUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.dictRoyAccountIntervalCreateArgs>;

export const dictRoyAccountIntervalCreateOneZodSchema = z.object({ select: dictRoyAccountIntervalSelectObjectSchema.optional(), include: dictRoyAccountIntervalIncludeObjectSchema.optional(), data: z.union([dictRoyAccountIntervalCreateInputObjectSchema, dictRoyAccountIntervalUncheckedCreateInputObjectSchema]) }).strict();