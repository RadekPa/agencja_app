import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAdvTypeSelectObjectSchema as dictAdvTypeSelectObjectSchema } from './objects/dictAdvTypeSelect.schema';
import { dictAdvTypeWhereUniqueInputObjectSchema as dictAdvTypeWhereUniqueInputObjectSchema } from './objects/dictAdvTypeWhereUniqueInput.schema';

export const dictAdvTypeFindUniqueSchema: z.ZodType<Prisma.dictAdvTypeFindUniqueArgs> = z.object({ select: dictAdvTypeSelectObjectSchema.optional(),  where: dictAdvTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictAdvTypeFindUniqueArgs>;

export const dictAdvTypeFindUniqueZodSchema = z.object({ select: dictAdvTypeSelectObjectSchema.optional(),  where: dictAdvTypeWhereUniqueInputObjectSchema }).strict();