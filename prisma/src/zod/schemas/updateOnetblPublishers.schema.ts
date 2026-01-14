import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPublishersSelectObjectSchema as tblPublishersSelectObjectSchema } from './objects/tblPublishersSelect.schema';
import { tblPublishersIncludeObjectSchema as tblPublishersIncludeObjectSchema } from './objects/tblPublishersInclude.schema';
import { tblPublishersUpdateInputObjectSchema as tblPublishersUpdateInputObjectSchema } from './objects/tblPublishersUpdateInput.schema';
import { tblPublishersUncheckedUpdateInputObjectSchema as tblPublishersUncheckedUpdateInputObjectSchema } from './objects/tblPublishersUncheckedUpdateInput.schema';
import { tblPublishersWhereUniqueInputObjectSchema as tblPublishersWhereUniqueInputObjectSchema } from './objects/tblPublishersWhereUniqueInput.schema';

export const tblPublishersUpdateOneSchema: z.ZodType<Prisma.tblPublishersUpdateArgs> = z.object({ select: tblPublishersSelectObjectSchema.optional(), include: tblPublishersIncludeObjectSchema.optional(), data: z.union([tblPublishersUpdateInputObjectSchema, tblPublishersUncheckedUpdateInputObjectSchema]), where: tblPublishersWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblPublishersUpdateArgs>;

export const tblPublishersUpdateOneZodSchema = z.object({ select: tblPublishersSelectObjectSchema.optional(), include: tblPublishersIncludeObjectSchema.optional(), data: z.union([tblPublishersUpdateInputObjectSchema, tblPublishersUncheckedUpdateInputObjectSchema]), where: tblPublishersWhereUniqueInputObjectSchema }).strict();