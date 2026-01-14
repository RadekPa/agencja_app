import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRoyTypeSelectObjectSchema as dictRoyTypeSelectObjectSchema } from './objects/dictRoyTypeSelect.schema';
import { dictRoyTypeIncludeObjectSchema as dictRoyTypeIncludeObjectSchema } from './objects/dictRoyTypeInclude.schema';
import { dictRoyTypeWhereUniqueInputObjectSchema as dictRoyTypeWhereUniqueInputObjectSchema } from './objects/dictRoyTypeWhereUniqueInput.schema';

export const dictRoyTypeFindUniqueOrThrowSchema: z.ZodType<Prisma.dictRoyTypeFindUniqueOrThrowArgs> = z.object({ select: dictRoyTypeSelectObjectSchema.optional(), include: dictRoyTypeIncludeObjectSchema.optional(), where: dictRoyTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictRoyTypeFindUniqueOrThrowArgs>;

export const dictRoyTypeFindUniqueOrThrowZodSchema = z.object({ select: dictRoyTypeSelectObjectSchema.optional(), include: dictRoyTypeIncludeObjectSchema.optional(), where: dictRoyTypeWhereUniqueInputObjectSchema }).strict();