import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCopyTypeSelectObjectSchema as dictCopyTypeSelectObjectSchema } from './objects/dictCopyTypeSelect.schema';
import { dictCopyTypeIncludeObjectSchema as dictCopyTypeIncludeObjectSchema } from './objects/dictCopyTypeInclude.schema';
import { dictCopyTypeWhereUniqueInputObjectSchema as dictCopyTypeWhereUniqueInputObjectSchema } from './objects/dictCopyTypeWhereUniqueInput.schema';

export const dictCopyTypeFindUniqueSchema: z.ZodType<Prisma.dictCopyTypeFindUniqueArgs> = z.object({ select: dictCopyTypeSelectObjectSchema.optional(), include: dictCopyTypeIncludeObjectSchema.optional(), where: dictCopyTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictCopyTypeFindUniqueArgs>;

export const dictCopyTypeFindUniqueZodSchema = z.object({ select: dictCopyTypeSelectObjectSchema.optional(), include: dictCopyTypeIncludeObjectSchema.optional(), where: dictCopyTypeWhereUniqueInputObjectSchema }).strict();