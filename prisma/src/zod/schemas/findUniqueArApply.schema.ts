import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArApplySelectObjectSchema as ArApplySelectObjectSchema } from './objects/ArApplySelect.schema';
import { ArApplyIncludeObjectSchema as ArApplyIncludeObjectSchema } from './objects/ArApplyInclude.schema';
import { ArApplyWhereUniqueInputObjectSchema as ArApplyWhereUniqueInputObjectSchema } from './objects/ArApplyWhereUniqueInput.schema';

export const ArApplyFindUniqueSchema: z.ZodType<Prisma.ArApplyFindUniqueArgs> = z.object({ select: ArApplySelectObjectSchema.optional(), include: ArApplyIncludeObjectSchema.optional(), where: ArApplyWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ArApplyFindUniqueArgs>;

export const ArApplyFindUniqueZodSchema = z.object({ select: ArApplySelectObjectSchema.optional(), include: ArApplyIncludeObjectSchema.optional(), where: ArApplyWhereUniqueInputObjectSchema }).strict();