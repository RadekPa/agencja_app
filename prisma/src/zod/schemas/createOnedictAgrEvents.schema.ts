import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAgrEventsSelectObjectSchema as dictAgrEventsSelectObjectSchema } from './objects/dictAgrEventsSelect.schema';
import { dictAgrEventsIncludeObjectSchema as dictAgrEventsIncludeObjectSchema } from './objects/dictAgrEventsInclude.schema';
import { dictAgrEventsCreateInputObjectSchema as dictAgrEventsCreateInputObjectSchema } from './objects/dictAgrEventsCreateInput.schema';
import { dictAgrEventsUncheckedCreateInputObjectSchema as dictAgrEventsUncheckedCreateInputObjectSchema } from './objects/dictAgrEventsUncheckedCreateInput.schema';

export const dictAgrEventsCreateOneSchema: z.ZodType<Prisma.dictAgrEventsCreateArgs> = z.object({ select: dictAgrEventsSelectObjectSchema.optional(), include: dictAgrEventsIncludeObjectSchema.optional(), data: z.union([dictAgrEventsCreateInputObjectSchema, dictAgrEventsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.dictAgrEventsCreateArgs>;

export const dictAgrEventsCreateOneZodSchema = z.object({ select: dictAgrEventsSelectObjectSchema.optional(), include: dictAgrEventsIncludeObjectSchema.optional(), data: z.union([dictAgrEventsCreateInputObjectSchema, dictAgrEventsUncheckedCreateInputObjectSchema]) }).strict();