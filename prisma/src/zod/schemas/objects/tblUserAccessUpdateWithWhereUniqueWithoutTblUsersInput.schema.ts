import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUserAccessWhereUniqueInputObjectSchema as tblUserAccessWhereUniqueInputObjectSchema } from './tblUserAccessWhereUniqueInput.schema';
import { tblUserAccessUpdateWithoutTblUsersInputObjectSchema as tblUserAccessUpdateWithoutTblUsersInputObjectSchema } from './tblUserAccessUpdateWithoutTblUsersInput.schema';
import { tblUserAccessUncheckedUpdateWithoutTblUsersInputObjectSchema as tblUserAccessUncheckedUpdateWithoutTblUsersInputObjectSchema } from './tblUserAccessUncheckedUpdateWithoutTblUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblUserAccessWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblUserAccessUpdateWithoutTblUsersInputObjectSchema), z.lazy(() => tblUserAccessUncheckedUpdateWithoutTblUsersInputObjectSchema)])
}).strict();
export const tblUserAccessUpdateWithWhereUniqueWithoutTblUsersInputObjectSchema: z.ZodType<Prisma.tblUserAccessUpdateWithWhereUniqueWithoutTblUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserAccessUpdateWithWhereUniqueWithoutTblUsersInput>;
export const tblUserAccessUpdateWithWhereUniqueWithoutTblUsersInputObjectZodSchema = makeSchema();
