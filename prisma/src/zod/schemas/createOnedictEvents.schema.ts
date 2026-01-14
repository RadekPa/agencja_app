import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictEventsSelectObjectSchema as dictEventsSelectObjectSchema } from './objects/dictEventsSelect.schema';
import { dictEventsIncludeObjectSchema as dictEventsIncludeObjectSchema } from './objects/dictEventsInclude.schema';
import { dictEventsCreateInputObjectSchema as dictEventsCreateInputObjectSchema } from './objects/dictEventsCreateInput.schema';
import { dictEventsUncheckedCreateInputObjectSchema as dictEventsUncheckedCreateInputObjectSchema } from './objects/dictEventsUncheckedCreateInput.schema';

export const dictEventsCreateOneSchema: z.ZodType<Prisma.dictEventsCreateArgs> = z.object({ select: dictEventsSelectObjectSchema.optional(), include: dictEventsIncludeObjectSchema.optional(), data: z.union([dictEventsCreateInputObjectSchema, dictEventsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.dictEventsCreateArgs>;

export const dictEventsCreateOneZodSchema = z.object({ select: dictEventsSelectObjectSchema.optional(), include: dictEventsIncludeObjectSchema.optional(), data: z.union([dictEventsCreateInputObjectSchema, dictEventsUncheckedCreateInputObjectSchema]) }).strict();