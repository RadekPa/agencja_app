import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblUsersSelectObjectSchema as tblUsersSelectObjectSchema } from './objects/tblUsersSelect.schema';
import { tblUsersIncludeObjectSchema as tblUsersIncludeObjectSchema } from './objects/tblUsersInclude.schema';
import { tblUsersUpdateInputObjectSchema as tblUsersUpdateInputObjectSchema } from './objects/tblUsersUpdateInput.schema';
import { tblUsersUncheckedUpdateInputObjectSchema as tblUsersUncheckedUpdateInputObjectSchema } from './objects/tblUsersUncheckedUpdateInput.schema';
import { tblUsersWhereUniqueInputObjectSchema as tblUsersWhereUniqueInputObjectSchema } from './objects/tblUsersWhereUniqueInput.schema';

export const tblUsersUpdateOneSchema: z.ZodType<Prisma.tblUsersUpdateArgs> = z.object({ select: tblUsersSelectObjectSchema.optional(), include: tblUsersIncludeObjectSchema.optional(), data: z.union([tblUsersUpdateInputObjectSchema, tblUsersUncheckedUpdateInputObjectSchema]), where: tblUsersWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblUsersUpdateArgs>;

export const tblUsersUpdateOneZodSchema = z.object({ select: tblUsersSelectObjectSchema.optional(), include: tblUsersIncludeObjectSchema.optional(), data: z.union([tblUsersUpdateInputObjectSchema, tblUsersUncheckedUpdateInputObjectSchema]), where: tblUsersWhereUniqueInputObjectSchema }).strict();