import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRoyAccountIntervalSelectObjectSchema as dictRoyAccountIntervalSelectObjectSchema } from './objects/dictRoyAccountIntervalSelect.schema';
import { dictRoyAccountIntervalIncludeObjectSchema as dictRoyAccountIntervalIncludeObjectSchema } from './objects/dictRoyAccountIntervalInclude.schema';
import { dictRoyAccountIntervalWhereUniqueInputObjectSchema as dictRoyAccountIntervalWhereUniqueInputObjectSchema } from './objects/dictRoyAccountIntervalWhereUniqueInput.schema';

export const dictRoyAccountIntervalFindUniqueSchema: z.ZodType<Prisma.dictRoyAccountIntervalFindUniqueArgs> = z.object({ select: dictRoyAccountIntervalSelectObjectSchema.optional(), include: dictRoyAccountIntervalIncludeObjectSchema.optional(), where: dictRoyAccountIntervalWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictRoyAccountIntervalFindUniqueArgs>;

export const dictRoyAccountIntervalFindUniqueZodSchema = z.object({ select: dictRoyAccountIntervalSelectObjectSchema.optional(), include: dictRoyAccountIntervalIncludeObjectSchema.optional(), where: dictRoyAccountIntervalWhereUniqueInputObjectSchema }).strict();