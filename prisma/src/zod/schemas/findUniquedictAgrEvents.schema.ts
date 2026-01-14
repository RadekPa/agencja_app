import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAgrEventsSelectObjectSchema as dictAgrEventsSelectObjectSchema } from './objects/dictAgrEventsSelect.schema';
import { dictAgrEventsIncludeObjectSchema as dictAgrEventsIncludeObjectSchema } from './objects/dictAgrEventsInclude.schema';
import { dictAgrEventsWhereUniqueInputObjectSchema as dictAgrEventsWhereUniqueInputObjectSchema } from './objects/dictAgrEventsWhereUniqueInput.schema';

export const dictAgrEventsFindUniqueSchema: z.ZodType<Prisma.dictAgrEventsFindUniqueArgs> = z.object({ select: dictAgrEventsSelectObjectSchema.optional(), include: dictAgrEventsIncludeObjectSchema.optional(), where: dictAgrEventsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictAgrEventsFindUniqueArgs>;

export const dictAgrEventsFindUniqueZodSchema = z.object({ select: dictAgrEventsSelectObjectSchema.optional(), include: dictAgrEventsIncludeObjectSchema.optional(), where: dictAgrEventsWhereUniqueInputObjectSchema }).strict();