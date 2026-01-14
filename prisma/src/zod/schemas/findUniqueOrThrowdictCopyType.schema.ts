import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCopyTypeSelectObjectSchema as dictCopyTypeSelectObjectSchema } from './objects/dictCopyTypeSelect.schema';
import { dictCopyTypeIncludeObjectSchema as dictCopyTypeIncludeObjectSchema } from './objects/dictCopyTypeInclude.schema';
import { dictCopyTypeWhereUniqueInputObjectSchema as dictCopyTypeWhereUniqueInputObjectSchema } from './objects/dictCopyTypeWhereUniqueInput.schema';

export const dictCopyTypeFindUniqueOrThrowSchema: z.ZodType<Prisma.dictCopyTypeFindUniqueOrThrowArgs> = z.object({ select: dictCopyTypeSelectObjectSchema.optional(), include: dictCopyTypeIncludeObjectSchema.optional(), where: dictCopyTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictCopyTypeFindUniqueOrThrowArgs>;

export const dictCopyTypeFindUniqueOrThrowZodSchema = z.object({ select: dictCopyTypeSelectObjectSchema.optional(), include: dictCopyTypeIncludeObjectSchema.optional(), where: dictCopyTypeWhereUniqueInputObjectSchema }).strict();