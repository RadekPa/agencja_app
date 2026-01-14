import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAdvTypeSelectObjectSchema as dictAdvTypeSelectObjectSchema } from './objects/dictAdvTypeSelect.schema';
import { dictAdvTypeWhereUniqueInputObjectSchema as dictAdvTypeWhereUniqueInputObjectSchema } from './objects/dictAdvTypeWhereUniqueInput.schema';

export const dictAdvTypeFindUniqueOrThrowSchema: z.ZodType<Prisma.dictAdvTypeFindUniqueOrThrowArgs> = z.object({ select: dictAdvTypeSelectObjectSchema.optional(),  where: dictAdvTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictAdvTypeFindUniqueOrThrowArgs>;

export const dictAdvTypeFindUniqueOrThrowZodSchema = z.object({ select: dictAdvTypeSelectObjectSchema.optional(),  where: dictAdvTypeWhereUniqueInputObjectSchema }).strict();